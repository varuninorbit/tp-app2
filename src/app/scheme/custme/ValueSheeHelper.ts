export class ValueSheetHelper {
  valueSheet = [];

  Set(valueSheet) {
    this.valueSheet = JSON.parse(JSON.stringify(valueSheet));
    return this;
  }
  
  RemoveRowElementOf(chid, catid, marks) {
    let index = this.valueSheet.findIndex(i => (i.chapter_id == chid && i.category_id == catid && i.marks == marks));
    if (index != -1) this.valueSheet.splice(index, 1)
    return this;
  }

  fromAtMatrix(atMatrix) {
    return atMatrix.reduce((acc, i) => {
      return acc.RemoveRowElementOf(...i);
    }, this)
  }
}