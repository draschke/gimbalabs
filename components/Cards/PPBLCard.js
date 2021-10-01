export default function PPBLCard({ children }) {
    return (       
        <div className='box-border shadow-xl h-auto w-1/2 mx-auto my-4 p-4 border-4 bg-purple-200 hover:bg-purple-100 bg-opacity-50 transform scale-100 hover:scale-105 z-20'>
            {children}
        </div>    
    )
}