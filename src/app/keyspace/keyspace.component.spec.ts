import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyspaceComponent } from './keyspace.component';

describe('KeyspaceComponent', () => {
  let component: KeyspaceComponent;
  let fixture: ComponentFixture<KeyspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
