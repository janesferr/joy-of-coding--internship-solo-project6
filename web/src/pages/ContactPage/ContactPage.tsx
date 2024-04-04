import { Link, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Form, TextField, TextAreaField, Submit, SubmitHandler, FieldError} from '@redwoodjs/forms'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

const CREATE_CONTACT = gql`
mutation CreateContactMutation($input: CreateContactInput!){
  CREATE_CONTACT(input: $input) {
    id
  }
}
`
interface FormValues{
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const [create] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT)

  const onSubmit: SubmitHandler<FormValues> =(data) => {
    create({ variables: { input: data } })
}
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

<Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
  <label htmlFor="name">Name</label>
  <TextField name="name" validation={{required:true}} />
  <FieldError name="name" className='Error' />

  <label htmlFor="email">Email</label>
  <TextField name="email" validation={{required:true, pattern: {
    value: /^[^@]+@[^.]+\..+$/,
    message: 'Please enter a valid email address',
  },
  }}/>
  <FieldError name="email" className="error" />

  <label htmlFor="message">Message</label>
  <TextAreaField name="message" validation={{required:true}} />
  <FieldError name="message" className="error" />

  <Submit>Save</Submit>
   
</Form>
</>
)
}

export default ContactPage
