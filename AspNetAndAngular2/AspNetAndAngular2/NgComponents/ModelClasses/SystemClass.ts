
export class SystemClass {
    Id: string;
    SystemName: string;
    Description: string;
    SelectedPackageId: number;
    SelectedMultiDescriptiors: number[];

    constructor(id: string, name: string, description: string) {
        this.Id = id;
        this.SystemName = name;
        this.Description = description;
        this.SelectedPackageId = 1;
        this.SelectedMultiDescriptiors = [1, 2];
    }
}