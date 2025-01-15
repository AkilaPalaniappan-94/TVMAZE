import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailComponentComponent } from './show-detail-component.component';



describe('ShowDetailComponentComponent', () => {
  let component: ShowDetailComponentComponent;
  let fixture: ComponentFixture<ShowDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDetailComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
