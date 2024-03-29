import React from 'react'

function Subscribe() {
  return (    
<section class="h-screen bg-cover bg-white mt-5 mb-2 py-2 pt-2 " >
  <div class="flex bg-gray-100 py-2 h-full w-full items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Rejoignez nous</h1>
      <p class="mt-6 lg:text-lg text-white">Envoyer votre email , et vous serez aux courants des derniers tendace de nos articles </p>
      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input id="email" type="text" class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Email Address" />

        <button class="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Envoyer email</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Subscribe;