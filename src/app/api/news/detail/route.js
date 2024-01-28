import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function GET(req,res){
    try {
        let {searchParams} = new URL(req.url)
        let id = parseInt(searchParams.get('id'))
        let prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
            where:{id:id},
            include:{catagories:true}    //oi news er under er category detail soho dekhabe
        })

        return NextResponse.json({status:"success",data:result})
    }catch (error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}