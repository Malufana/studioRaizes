import '../../styles/globals.css';

export default function DetalhesModelos(){
    return(
        <div className='flex flex-col bg-white rounded-xl overflow-hidden shadow-lg w-full'>

            <div className='w-full h-60'>
                <img src="/imgs/user.png" alt="" className='w-full h-full object-cover'/>
            </div>

            <div className='flex flex-col justify-center p-6 text-center'>
                <p className='text-black text-lg font-lato font-semibold'>
                    MODELOX
                </p>
            </div>

            <div>
                <select name="" id="">
                    <option value="">Selecione a COR</option>
                </select>

                <select name="" id="">
                    <option value="">Selecione o ACESSÓRIO</option>
                </select>

                
            </div>
        </div>
    );
}