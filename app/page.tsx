import Image from "next/image";

export default function Home() {
  const dogs = [
    {
      name: 'Stew',
      transform: 'scale-110 -rotate-6'
    },
    {
      name: 'Curry',
      transform: 'scale-75 rotate-6'
    },
    {
      name: 'Noodles',
      transform: 'md:scale-110 rotate-6'
    },
    {
      name: 'Jollof',
      transform: 'scale-75 -rotate-6 skew-y-6 translate-x-2 translate-y-15'
    },
    {
      name: 'Veggie',
      transform: 'scale-110'
    }
  ]
  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      <h1>Food Limpopos 🥗!</h1>
      <h2 className="my-12">Best Food in town</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12 my-20 lg:my-32">
        {dogs.map(({ name, transform }, idx) => {
          return (
            <div key={name} className={`border-2 border-opacity-50 border-indigo-400 rounded-xl px-5 pt-2 pb-5 shadow-xl shadow-purple-300 backdrop-blur-sm bg-white/30 ${transform} hover:bg-purple-200 hover:scale-105 hover:transition hover:duration-500`}>
              <div className="my-3">
                <h2>
                  {name}
                </h2>
              </div>

              <div>
                <Image
                  src={`/images/${name.toLowerCase()}.jpg`}
                  width={260}
                  height={160}
                  alt={name}
                  className="h-52 w-full object-cover rounded-lg"
                />
              </div>


            </div>
          )
        })}
      </div>
    </main>
  );
}
