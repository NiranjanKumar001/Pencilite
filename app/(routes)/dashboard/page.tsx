"use client"
import { api } from '@/convex/_generated/api'
import { useConvex, useMutation } from 'convex/react'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import Header from './_components/Header'
import FileList from './_components/FileList'
import AdBanner from './../../_components/AdBanner'
function Dashboard() {

  const convex=useConvex();
  const {data:session}=useSession();
  const user=session?.user;
  //const getUser=useQuery(api.user.getUser,{email:user?.email});

  const createUser=useMutation(api.user.createUser);
  useEffect(()=>{
      if(user)
      {
        checkUser()
      }
  },[user])
  

  const checkUser=async()=>{
    if(!user?.email) return;

    const result=await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length)
    {
        createUser({
          name:user.name ?? '',
          email:user.email,
          image:user.image ?? ''
        }).then((resp)=>{
          console.log(resp)
        })
    }

  }
  return (
    <div className='p-8'>
      <Header/>

      <FileList/>
      <AdBanner
          data-ad-slot="4796371341"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
    </div>

  )
}

export default Dashboard
