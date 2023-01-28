export async function handler(event: string, context: string) {
  console.log('Stage Name is' + process.env.stage);

  return {
    body: 'Asalam o Alaikum From Lambda Function',
    statusCode: 200,
  };
}
