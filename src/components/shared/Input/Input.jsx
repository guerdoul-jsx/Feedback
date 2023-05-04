
const Input = ({inputType , ...otherprops}) => {
  return (
    <input type={inputType} {...otherprops}/>
  )
}

export default Input