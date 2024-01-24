// eslint-disable-next-line import/no-unresolved
// import { Client } from '@elastic/elasticsearch';

// //Conexion con elasticsearch
// export function conn(): Client {
//   const client = new Client({
//     node: ['https://10.11.230.21:9200', 'https://10.11.230.22:9200', 'https://10.11.230.23:9200', 'https://10.11.230.25:9200'],
//     tls: {
//       rejectUnauthorized: false,
//     },
//     auth: {
//       apiKey: 'X3dqNXpvUUJFUVc4d0VBYlNzb2o6a3prVmVkajhSdVcya1F6cGFUbko5Zw=='
//     }

//   })

//   return client;
// }

// //Validar que la conexion funciona

// const client = conn();
// client.ping()
//   .then((response: any) => {
//     console.log(response);
//   })
//   .catch((error: any) => {
//     console.error('Failed to connect to Elasticsearch:', error.message);
//   });

//=============================> Query para listar categorías <=============================
export async function queryCategory(): Promise<any> {
  const url = 'http://192.168.50.236:8087/categoria';
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('No se pudo obtener los datos para la consulta');
    }
    const data = await response.json(); // Parse JSON from the response
    //console.log(data)

    return data;
  } catch (error: any) {
    console.log('Error en la conslta:', error.message);
  }
}

//----------------------------------------------------------------
//=============================> buscar doc por categoria asociada <=============================

export async function queryCategories(category: string): Promise<any> {
  const url = `http://192.168.50.236:8087/categorias?category=${category}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('No se pudo obtener los datos para la consulta');
    }
    const data = await response.json(); // Parse JSON from the response

    return data;
  } catch (error: any) {
    console.log('Error en la conslta:', error.message);
  }
}

//----------------------------------------------------------------
// export async function semanticQueryContent(titulo: string) {
//   const result: any = await client.search({
//     index: "nadhis_digital_brain",
//     body: {
//       "query": {
//         "bool": {
//           "must": [
//             {
//               "bool": {
//                 "should": [
//                   {
//                     "match_phrase": {
//                       "title": titulo
//                     }
//                   }
//                 ],
//                 "minimum_should_match": 1
//               }
//             }
//           ],
//           "filter": [],
//           "should": [],
//           "must_not": []
//         }
//       }
//     }
//   }, {
//     ignore: [404],
//     maxRetries: 3
//   })
//   const res = result.hits.hits[0]._source.mark

//   //console.log(res)
//   return res;
// }
