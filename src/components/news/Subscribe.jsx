'use client'
import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import { ErrorToast, IsEmail, SuccessToast } from '@/utility/FormHelper';

const Subscribe = () => {
    let[submit,setSubmit] = useState(false)
    let [data,setData] = useState({email:""})

    function handleInput (name,value){
        setData({
            ...data,
            [name]:value
        })
    }

    async function handleSubmit (){
        if(IsEmail(data.email)){
            ErrorToast("Please Input Valid Email !")
        }else{
            setSubmit(true)
            const option = {
                method:'POST',
                body:JSON.stringify(data)
            }
            let res = await (await fetch(`/api/subscriber`,option)).json()
            setSubmit(false)
            setData({
                ...data,
                email:""
            })
            res['status']==='success'?(
                SuccessToast('Successfully Subscribed!')
            ):(
                ErrorToast("Duplicate Email Found!")
            )
        }
    }

    return (
      <>
      <section id="great">
            <div className="great">
                <div className="container">
                    <div className="great-content text-center">
                        <h1 className="display-4 fw-bold pb-3">
                            Expect Great Things from <br />
                            Your News Agency
                        </h1>
                        <p className="text-secondary fs-5">
                            Make the Right Choice for Your Future. Choose ..!
                        </p>
                        <a href="#" id="animContainerrr">
                            <iframe src="https://lottie.host/embed/a197074e-8c5a-4392-ab32-7a02fa062598/Y7Oit5ZmHe.json" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
      <section id="subscribe" className="my-5">
      <div className="container">
          <div className="subscribe">
              <div className="row">
                  <div className="col-lg-1 col-sm-2 d-flex align-self-center justify-content-center">
                      <img src="/envelop.png" alt="icon" />
                  </div>
                  <div className="subscribe-text col-lg-5 col-sm-8">
                      <h2 className="fw-bold">Subscribe for Newsletter</h2>
                      <p>Notify when new news post or published</p>
                  </div>
                  <div className="subscribe-form col-lg-6 col-sm-12 d-flex align-self-center">
                      <div className="subscribe-form-one  ">
                          <form action="" onSubmit={e=>e.preventDefault()} className="">
                              <input value={data.email} onChange={(eve) => handleInput('email',eve.target.value) } type="email" placeholder="Your Email" className="" />
                              <SubmitButton formValid={handleSubmit} text={"Subscribe Now"} submit={submit}/>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
      </>

    );
};

export default Subscribe;