import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request){
  try{
    const body=await req.json();
    const required=['facultyName','branch','semester','subject','pcSelection'];
    for(const key of required) if(!body[key]) return NextResponse.json({error:`${key} is required`},{status:400});
    const session=await prisma.labSession.create({data:{date:new Date(),facultyName:String(body.facultyName).trim(),branch:String(body.branch),semester:String(body.semester),subject:String(body.subject).trim(),labName:String(body.labName||'Computer Lab'),pcSelection:String(body.pcSelection),inTime:new Date(),studentCount:body.studentCount==null?null:Number(body.studentCount),purpose:body.purpose?String(body.purpose):null,remarks:body.remarks?String(body.remarks):null}});
    return NextResponse.json({session});
  }catch(e){console.error(e);return NextResponse.json({error:'Database is not configured or the request could not be saved.'},{status:500});}
}

export async function GET(){
  try{const sessions=await prisma.labSession.findMany({orderBy:{createdAt:'desc'},take:200});return NextResponse.json({sessions});}
  catch{return NextResponse.json({error:'Database unavailable'},{status:500});}
}
