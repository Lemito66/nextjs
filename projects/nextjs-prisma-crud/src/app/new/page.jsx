function NewPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10">
        <input type="text" placeholder="Title" 
          className="border border-gray-400 p-2 mb-4 w-full"
        />
        <textarea placeholder="Content" row="3" className="border border-gray-400 p-2 mb-4 w-full"></textarea>
        <button type="submit" 
        className="bg-green-500 text-white p-2 w-full"
        >Crear</button>
      </form>
    </div>
  );
}

export default NewPage;
