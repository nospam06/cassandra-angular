import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMetadataComponent } from './table-metadata.component';

describe('TableMetadataComponent', () => {
  let component: TableMetadataComponent;
  let fixture: ComponentFixture<TableMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
