import React, { useState } from "react";

const CreateProduct = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:bg-blue-400 hover:text-white">Create</button>
    </form>
  )
}

export default CreateProduct;