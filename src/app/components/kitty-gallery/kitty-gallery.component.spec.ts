import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyGalleryComponent } from './kitty-gallery.component';

describe('KittyGalleryComponent', () => {
  let component: KittyGalleryComponent;
  let fixture: ComponentFixture<KittyGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittyGalleryComponent]
    });
    fixture = TestBed.createComponent(KittyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
