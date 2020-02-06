/**
 * Copyright 2019 AXA Group Operations S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PdfminerFigure } from './PdfminerFigure';
import { PdfminerTextbox } from './PdfminerTextbox';

export class PdfminerPage {
  public _attr: {
    id: string;
    bbox: string;
    rotate: string;
  };
  public textbox: PdfminerTextbox[];
  public figure: PdfminerFigure[];
  /*public line: object[];
  public rect: object[];
  public curve: object[];
  public layout: object[];*/

  constructor(jsonObj: any) {
    this._attr = jsonObj._attr;
    if (Array.isArray(jsonObj.textbox)) {
      this.textbox = jsonObj.textbox.map(tb => new PdfminerTextbox(tb));
    } else if (jsonObj.textbox != null) {
      this.textbox = [new PdfminerTextbox(jsonObj.textbox)];
    }
    if (Array.isArray(jsonObj.figure)) {
      this.figure = jsonObj.figure.map(fig => new PdfminerFigure(fig));
    } else if (jsonObj.figure != null) {
      this.figure = [new PdfminerFigure(jsonObj.figure)];
    }
    /*this.line = jsonObj.line;
    this.rect = jsonObj.rect;
    this.curve = jsonObj.curve;
    this.layout = jsonObj.layout;*/
  }
}
