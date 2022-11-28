import React from "react"

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  // handleChange as function has same type as if it were a prop
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event')
  }
  return (
    <>
      <input type='text' value={props.value} onChange={props.handleChange}/>
      <input type='text' value={props.value} onChange={handleInputChange}/>
    </>
  )
}
