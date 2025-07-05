import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'categories_de_questions.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const questions_categories = JSON.parse(fileContent);
  return NextResponse.json(questions_categories);
}