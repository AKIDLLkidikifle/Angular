import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyComponent } from './company.component';

describe('TableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CompanyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Testapp1'`, () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Testapp1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Testapp1');
  });
});


