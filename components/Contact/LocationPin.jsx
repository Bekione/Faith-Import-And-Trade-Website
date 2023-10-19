import Image from 'next/image'

const LocationPin = ({ text }) => {
  return (
    <div className="flex items-center w-[180px]">
        <Image src="/images/contact/location-pin.gif" width="24px"/>
        <p className=''>{text}</p>
    </div>
  )
}

export default LocationPin