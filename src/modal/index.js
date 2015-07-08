import {bindable, inject} from 'aurelia-framework';
import {Wizard} from './wizard';

@inject(Wizard)
export class Index{
  showing = false;
  wizardShowing = false;
  constructor(wizard){
    this.wizard = wizard;
    this.steps = [
      new Step(1, 'Step one', 'modal/wizard-step-one'),
      new Step(2, 'Step two', 'modal/wizard-step-two'),
      new Step(3, 'Step three', 'modal/wizard-step-three')
    ];
    this.activeStep = this.steps[0];
  }
  showModal(){
    this.showing = true;
  }
  closeModal(){
    this.showing = false;
  }
  showWizard(){
    this.wizardShowing = true;
  }
  nextStep(){
    var self = this;
    if (this.activeStep.id === this.steps.length) {
        this.activeStep = this.steps[0];//jrt
      self.wizardShowing = false;
    } else {
      this.activeStep = this.steps[this.activeStep.id];
    }
  }
  closeWizard(){
    //  this.wizardShowing = false;
    // added logic to close -- jrt
    if (this.activeStep.id === this.steps.length) {
        this.activeStep = this.steps[0];//jrt
      self.wizardShowing = false;
    } else {
      this.wizardShowing = false;
    }
  }
}

class Step {
  id = 0;
  title = '';
  path = '';
  constructor(id, title, path){
    this.id = id;
    this.title = title;
    this.path = path;
  }
}
