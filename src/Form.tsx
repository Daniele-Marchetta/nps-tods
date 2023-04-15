import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react"


const handleSubmit=(e:any)=>{
e.preventDefault();
console.log(e.target.prova.value)
console.log(e.target.sasso.value)

}

const prova=(e:any)=>{
console.log(e)
}

const Form = ()=>{
    return (
        <form onSubmit={handleSubmit}>
      <RadioGroup  name="prova">
        <Stack direction='row'>
          <Radio value='1'>First</Radio>
          <Radio value='2'>Second</Radio>
          <Radio value='3'>Third</Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup onChange={prova} name="sasso">
        <Stack direction='row'>
          <Radio  value='Da quanto tempo é cliente Tods ?'>First</Radio>
          <Radio  value='Da quanto tempo é cliente Tods ?'>Second</Radio>
          <Radio  value=''>Third</Radio>
        </Stack>
      </RadioGroup>
      <Button type="submit">Sumbit</Button>
      </form>
    )
}

export default Form