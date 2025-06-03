import '../../styles/globals.css';

export default function Sobre(){
    return(
        <div className='flex flex-col items-center justify-center min-h-screen p-4 space-y-6'>
            <div>
                <h1 className='text-white text-6xl font-bold mb-8 text-center'>SEJA BEM VINDO(A)</h1>
            </div>

            <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl w-full'>

                <div className='w-full md:w-80 h-80'>
                    <img src="/imgs/user.png" alt="" className='w-full h-full object-cover'/>
                </div>

                <div className='flex flex-col justify-center p-6 text-center'>
                    <p className='text-black text-lg font-lato'>
                        Eu sou Yago Lima, trancista e instrutor de tranças na Primatec
                        Trabalho com beleza e cuidados pessoais a mais de * anos, vamos agendar comigo?
                    </p>
                </div>

            </div>
            <div>
                <button className='mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-amber-950 transition duration-100'>AGENDAR</button>
            </div>
        </div>
    );
}