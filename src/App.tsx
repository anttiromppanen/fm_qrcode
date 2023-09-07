import qrImage from './assets/images/image-qr-code.png';

function App() {
  return (
    <div className="flex items-center justify-center bg-lightGrey min-h-screen w-full px-8">
      <div className="w-[350px] bg-white rounded-2xl shadow-lg p-4">
        <img className="h-auto max-w-full rounded-xl" src={qrImage} />
        <div className="px-3 sm:px-6 py-6 text-center">
          <h3 className="text-[1.375rem] text-darkBlue font-bold tracking-tight">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-base text-grayishBlue pt-3 tracking-tight drop-shadow-sm">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
