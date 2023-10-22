import Image from "next/image";
const About = () => {
    return(
        <div className='container mx-auto'>
            <div className='flex flex-row justify-center bg-stone-600/90 rounded-2xl'>
                <div className="w-1/2 p-3">
                    
                </div>
                <div className="w-1/2 p-3">
                    <h1 className="text-3xl text-violet-300/80">
                        Howdy, My name is Matthew Jeshua Martin
                    </h1>
                    <div className="text-md bg-gradient-to-r bg-clip-text text-transparent from-violet-400 to-violet-300">
                        My journey into programming began in the year 2015, after finding I have a passion for technology. Began teaching myself Python, developing small applications like a calulator, basic inventory manager, and the like I went and saught mentorship through a bootcamp. First bootcamp I attended was Bottega's Full Stack Ruby on Rails course. With that course I gained an understanding of Ruby, Ruby on Rails, TypeScript, Angular and CoffeeScript but my learning journey did not stop there, feeling like I was still missing elements of programming I took up a second bootcamp, Lambda School (now known as Bloom Institute of Technology) Full Stack JavaScript Developer program. Were I solidfy my understanding programming and gained knowledge in JavaScript, React.js, Express.js and basics of SQL.
                    </div> 
                    <div className="text-md bg-gradient-to-l bg-clip-text text-transparent from-violet-400 to-violet-300">
                        After completing the program and passing the final Technical Interview I begin my job search which led me to join a apprenticeship program where I learned C#, Microsoft SQL Server and more core programming techniques.
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-stone-600/90 rounded-2xl mt-3">
                <div className="w-1/2 p-3 text-center">
                    <h3 className="text-2xl bg-gradient-to-r bg-clip-text text-transparent from-violet-200 to-violet-400">
                        Skills
                    </h3>
                    <h4 className="text-lg bg-gradient-to-l bg-clip-text text-transparent from-violet-400 to-violet-200">
                        Programming Languages
                    </h4>
                    <p className="text-md bg-gradient-to-r bg-clip-text text-transparent from-violet-200 to-violet-400">
                        C#, TypeScript, JavaScript, Python, Ruby, SQL
                    </p>
                    <h4 className="text-lg bg-gradient-to-l bg-clip-text text-transparent from-violet-400 to-violet-200">
                        Frameworks and Libraries
                    </h4>
                    <p className="text-md bg-gradient-to-r bg-clip-text text-transparent from-violet-200 to-violet-400">
                        .NET, .NET Core, Next.Js, Angular, Blazor, Ruby on Rails
                    </p>
                </div>
                <div className="w-1/2 p-3 text-center">
                <h3 className="text-2xl bg-gradient-to-r bg-clip-text text-transparent from-violet-200 to-violet-400">
                        Personal Hobbies
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About;