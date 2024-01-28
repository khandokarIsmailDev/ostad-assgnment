import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";


export async function GET(req,res){
    try {
        let{searchParams} = new URL(req.url)
        let userId = parseInt(searchParams.get('id'))
        let prisma = new PrismaClient()
        const result = await prisma.comments.findMany({
            where:{userId:userId},
            include:{news_list:{select:{title:true}}}
        })

        return NextResponse.json({status:"success",data:result})

    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}



export async function POST(req,res){
    try{
        // user login thaklei akmatro comment korte parbe, tar id ta nibo headers theke
        let headerList = headers()
        let id = parseInt(headerList.get('id'))

        //jei post e comment korbo, sei post er postId amra frontend theke tole ane set kore dibo
        let reqBody = await req.json()
        reqBody.userId = id

        const prisma = new PrismaClient()
        const result = await prisma.comments.create({
            data:reqBody
        })

        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}


export async function DELETE(req,res){
    try{
        //user login na thakle abar comment delete o korte parbe na
        let headerList = headers()
        let user_id = parseInt(headerList.get('id'))
        let reqBody = await req.json()
        let comment_id = parseInt(reqBody['id'])

        const prisma = await new PrismaClient()
        const result  = await prisma.comments.deleteMany({
            where:{
                AND:[
                    {userId:user_id},
                    {id:comment_id}
                ]
            }
        })

        return NextResponse.json({status:"success",data:result})

    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}