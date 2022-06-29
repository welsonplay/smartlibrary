import { request } from 'umi';
import type { AzureSearchODataResult, AzureSearchParams } from './data';

export async function getAzureSearch(
  params: AzureSearchParams,
): Promise<{ data: AzureSearchODataResult }> {
  const data = await request(
    `https://prod-83.eastus.logic.azure.com:443/workflows/1c2cb33433c84898bd2c7475262b84ab/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=O7e1ry3QkytJRt7rQkt4PK0i1zmnfxW5CdtQi3mNeeE`,
    {
      method: 'post',
      data: {
        action: 'search',
        data: {
          index: 'adlsgen2-index',
          search: params.search,
        },
      },

      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ge3OxfskhziJFVEYSAgygr6KKzIZHoOiLlBB7Z6SjLAzSeD6CZHd',
        Authorization:
          'BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2QzNzdlNDM1LTBmNjYtNGFlNS1hZjU4LTIzYmVlYmNkODAxNi8iLCJpYXQiOjE2NTU5MDYzNTQsIm5iZiI6MTY1NTkwNjM1NCwiZXhwIjoxNjU1OTEwMjU0LCJhaW8iOiJFMlpnWU5ndFBUSEhWSnpCNlJwNzloT21ycDZKQUE9PSIsImFwcGlkIjoiNDZmYzU0NWEtYjFlZS00ZWQ0LTgwNzUtN2YxODdjYzA1ZjI1IiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDM3N2U0MzUtMGY2Ni00YWU1LWFmNTgtMjNiZWViY2Q4MDE2LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiN2I5MjBiNjMtY2M3NC00OTcwLTkwYmItNGU4YzBhZDdlODlkIiwicmgiOiIwLkFXNEFOZVIzMDJZUDVVcXZXQ08tNjgyQUZrWklmM2tBdXRkUHVrUGF3ZmoyTUJOdUFBQS4iLCJzdWIiOiI3YjkyMGI2My1jYzc0LTQ5NzAtOTBiYi00ZThjMGFkN2U4OWQiLCJ0aWQiOiJkMzc3ZTQzNS0wZjY2LTRhZTUtYWY1OC0yM2JlZWJjZDgwMTYiLCJ1dGkiOiI0cWhKYjRxMUxVLXd4Nk9WMWtwcEFBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE1OTk3NDUyMzh9.MZOaYMPTHdQ7tHZWWn0__U1yWokjeV8ZT4lN0CBgvKkbX6mA_IluyCxd1eIcdNsEL60a3Zh7J8RHbTzFuHojJZEsVsdmyjz1jZRKJ7xcdu0pIRdyHIdh6wgGr2Ca9CSeNXLKgs2RvMpTXwWuMgyChEpBOnCfQzIAyuZ69WlpkKDtm1aw9qLs2pY3CKZLV1mmsB76gBrjKRa2GiOSRH6LFvUmfRhOJSDpJ430N_sDp2vT7d6WZa5SAXM2rcFOvUASiz-BSpofpSRhCMIPHTDcVSmu-c-ammY4MtEM8CQpFkZJ8JHwdqC--PyRfY7TdUFNAEUKP8ZM0c4ksHE-YDXJWQ',
      },
    },
  );

  return {
    data: data,
  };
}
