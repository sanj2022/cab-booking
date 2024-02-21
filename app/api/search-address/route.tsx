import { NextResponse } from "next/server";
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any) {

    const {searchParams}=new URL(request.url);
    console.log("HI")
console.log(process.env.MAPBOX_ACCESS_TOKEN)
    const searchText=searchParams.get('q');
    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=10&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult=await res.json();
    return NextResponse.json(searchResult)

    //http://localhost:3000/api/search-address?q=Michigan%20Stadium
    
}