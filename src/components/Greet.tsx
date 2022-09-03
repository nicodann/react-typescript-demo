type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props //assigns a value of zero if value not passed in
  return (
    <div>
      
      <h2>
        {props.isLoggedIn 
          ? `Welcome ${props.name} You have ${messageCount} unread messages` 
          : 'Welcome Guest'}
      </h2>
    </div>
  )
}