"use client";
import { crearCliente } from "../../actions/cliente";
import { useRef } from "react";

import { toast } from "react-toastify";

export default function ClientePage() {
  const formRef = useRef(null);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <form
          action={async (formData) => {
            const cliente = await crearCliente(formData);
            console.log(cliente);
            toast.success("Cliente creado");
            formRef.current?.reset();
          }}
          ref={formRef}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              ¿Cuál es tu nombre?
            </label>
            <input type="text" name="nombre" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="lenguaje-favorito" className="form-label">
              Lenguaje favorito para el Backend
            </label>
            <input type="text" name="lenguaje_backend" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="lenguaje-favorito" className="form-label">
              Framework favorito para el Frontend
            </label>
            <select name="framework_frontend" className="form-select" defaultValue="">
              <option value="" className="form-select">
                Seleccione
              </option>
              <option value="Vuejs">Vuejs</option>
              <option value="Astro">Astro</option>
              <option value="Svelte">Svelte</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
            </select>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Procesar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
