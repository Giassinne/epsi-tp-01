import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: `<p appHighlight>Texte de test</p>`
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HighlightDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance of HighlightDirective', () => {
    const element = fixture.nativeElement.querySelector('p');
    expect(element).toBeTruthy();
    expect(element.style.backgroundColor).toBe('yellow');
    expect(element.style.fontWeight).toBe('bold');
  });
});
