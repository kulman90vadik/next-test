import ContactPerson from "@/components/ContactPerson";
import Head from "next/head";
import { FC } from "react";
import { GetServerSideProps } from 'next'
import axios from "axios";

export const getServerSideProps:GetServerSideProps = async (context) => {
    // const obj:{id: string} = context.params;
    const {id} = context.params;
    // const id = obj['id'];
    console.log(id);
   
    console.log(context.params);

	const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
	if(!data) { return { notFound: true} }
	return {props: {contact: data}}
}

type Props = {
	contact: usersType
}


const PageContact: FC<Props> = ({contact}) => {
  return (
    <>
      <Head>
				<title>Contact</title>
			</Head>
      <ContactPerson contact={contact} />
    </>
  );
}
 
export default PageContact;