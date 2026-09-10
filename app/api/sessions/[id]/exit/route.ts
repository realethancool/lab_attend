import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(_:Request,{params}:{params:Promise<{id:string}>}){
  try{const {id}=await params;const session=await prisma.labSession.update({where:{id},data:{outTime:new Date()}});return NextResponse.json({session});}
  catch{return NextResponse.json({error:'Unable to record exit.'},{status:500});}
}
