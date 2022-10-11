const customGridSchema = {
  title: "Grilla Custom",
  type: "objet",
  properties: {
    gridType: {
      title: "Tipo de Grilla",
      type: "number",
      enum: [1, 2, 3, 4]
    }
  }
}

export default customGridSchema