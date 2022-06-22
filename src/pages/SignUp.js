import  React from  "react";


function SignUp(){
    return(
        
<div class="bg-white h-screen flex items-center justify-center p-12 py-6">
  <div class="mx-auto w-full max-w-screen-lg bg-cyan-700 px-5 py-10">
    <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div class="flex justify-center md:justify-end">
        <img class="w-full max-w-sm" src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
      </div>
      <div class="flex items-center">
        <div class="mx-auto md:mx-0">
          <h3 class="text-4xl font-bold text-white">Rejoingnez nous</h3>
          <p class="mt-2 max-w-[20rem] text-lg text-white/80">Soliciter les services des meilleurs articles du mois </p>
          <form action="" class="mt-4 flex flex-col space-y-2">
            <input type="text" name="name" id="name" placeholder="nom" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <input type="text" name="lastname" id="lastname" placeholder="prénoms" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <input type="number" name="email" id="number" placeholder="+2253432244223" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <input type="email" name="email" id="email" placeholder="email" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <textarea type="" name="email" id="comment" placeholder="commentaire ..." class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <button type="submit" class="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white">Rejoindre</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export  default SignUp;