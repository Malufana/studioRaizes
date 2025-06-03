export default function ModeloCard(){
    return(
        <div className='flex flex-col bg-white rounded-xl overflow-hidden shadow-lg w-full'>

            <div className='w-full h-45'>
                <img src="/imgs/user.png" alt="" className='w-full h-full object-cover'/>
            </div>

            <div className='flex flex-col justify-center p-4 text-center'>
                <p className='text-black text-lg font-lato font-semibold'>
                    MODELOX
                </p>
            </div>

        </div>
    );
}