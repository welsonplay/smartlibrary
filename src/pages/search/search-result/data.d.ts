export interface AzureSearchParams {
  search: string;
}

export interface AzureSerachPiiEntities {
  text: string;
  type: string;
  subtype?: string;
  offset: number;
  length: number;
  score: number;
}

export class AzureSearchResultItem {
  '@search.score': number;
  content?: string;
  metadata_storage_path?: string;
  metadata_storage_file_extension?: string;
  people: string[];
  organizations: string[];
  locations: strinhg[];
  keyphrases: string[];
  language: string;
  translated_text?: string;
  masked_text?: string;
  merged_content?: string;
  text: string[];
  layoutText: string[];
  imageTags: string[];
  imageCaption: string[];
  imageCelebrities: string[];
  pii_entities: AzureSerachPiiEntities[];

  abc() {
    debugger;
    let token = this.metadata_storage_path;

    if (!token) return null;

    const numberOfPaddingCharacters = token.substring(token.length - 1);
    debugger;
    token = token.substring(0, token.length - 1);

    token = token.padEnd(token.length + numberOfPaddingCharacters, '=');

    const binary = atob(token);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }

  get metadata_storage_path_decode(): string {
    debugger;
    let token = this.metadata_storage_path;

    if (!token) return null;

    const numberOfPaddingCharacters = token.substring(token.length - 1);
    debugger;
    token = token.substring(0, token.length - 1);

    token = token.padEnd(token.length + numberOfPaddingCharacters, '=');

    const binary = atob(token);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }
}

export interface AzureSearchODataResult {
  '@odata.context': string;
  value: AzureSearchResultItem[];
}

// if (token.isEmpty) return null;

//     // The last character in the token is the number of padding characters.
//     var numberOfPaddingCharacters =
//         int.parse(token.substring(token.length - 1));

//     // The Base64 string is the token without the last character.
//     token = token.substring(0, token.length - 1);

//     // Pad the Base64 string out with '='s
//     token = token.padRight(token.length + numberOfPaddingCharacters, "=");

//     //Decode
//     var decode = utf8.decode(base64.decode(token));

//     return decode;
