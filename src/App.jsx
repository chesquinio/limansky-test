import useCategories from "./hooks/useCategories"

function App() {
  const categories = useCategories()

  return (
    <main className="m-auto max-w-7xl py-32">
      <h1 className="text-4xl font-light text-white mb-10 text-center">Categorias</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-5">
      {categories.length > 0 ? categories.map(category => (
        <div className="bg-gray-700 rounded p-5 flex flex-col w-full m-auto h-full" key={category.id}>
          <h3 className="text-xl mb-2">{category.name}</h3>
          <p className="font-light mb-2">{category.description}</p>
          <span className="font-light h-full flex justify-end items-end text-gray-400">{new Date(category.entryDate).toLocaleString()}</span>
        </div>
      )) : (
        <p>Cargando...</p>
      )}
      </section>
    </main>
  )
}

export default App
