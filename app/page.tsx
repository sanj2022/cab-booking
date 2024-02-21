
"use client"; // This is a client component
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {

  const [userLocation,setUserLocation] = useState<any>();
  useEffect(()=>{
    getUserLocation();
  },[])

  const getUserLocation= () =>{
    navigator.geolocation.getCurrentPosition(function(pos) {
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }

  const [sourceCoordinates,setSourceCoordinates] = useState<any>([]);
  const [destionationCoordinates,setDestinationCoordinates] = useState<any>([]);
  return (
  <div className=''>
    <UserLocationContext.Provider value ={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value ={{sourceCoordinates, setSourceCoordinates}}>
      <DestinationCordiContext.Provider value={{destionationCoordinates, setDestinationCoordinates}}>
   <div className="grid grid-cols-1 md:grid-cols-3">
    <div>
      <Booking/>
    </div>
    <div className="col-span-2 order-first md:order-last">
     <MapBoxMap/>
    </div>
   </div>
   </DestinationCordiContext.Provider>
   </SourceCordiContext.Provider>
   </UserLocationContext.Provider>
   </div>
  );
}
