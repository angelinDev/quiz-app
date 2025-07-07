
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';


// Fonction utilitaire pour lire les catégories de questions directement depuis le fichier JSON
async function readQuestionsCategoriesFile() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'categories_de_questions.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Route GET dynamique pour /api/quiz/[id]
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const categories = await readQuestionsCategoriesFile();
    const id = parseInt(params.id, 10);
    const category = categories.find((cat: any) => cat.id === id);
    if (!category) {
      return NextResponse.json({ error: 'Catégorie non trouvée' }, { status: 404 });
    }
    
    let questionsPath = category.questions.replace(/^\/?questions\//, '');

    const filePath = path.join(process.cwd(), 'src', 'data', 'questions', questionsPath);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const questions = JSON.parse(fileContent);
    return NextResponse.json({
      category: category.category,
      description: category.description,
      duration: category.duration,
      questions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erreur serveur' }, { status: 500 });
  }
}

