"use server";
export const crearCliente = async (formData) => {
  if (
    !formData.get("nombre") ||
    !formData.get("lenguaje_backend") ||
    !formData.get("framework_frontend")
  )
    return;

  let cliente = formData.get("nombre");
  let lenguaje_backend = formData.get("lenguaje_backend");
  let framework_frontend = formData.get("framework_frontend");

  const NewCliente = {
    cliente,
    lenguaje_backend,
    framework_frontend,
  };

  return NewCliente;
};
