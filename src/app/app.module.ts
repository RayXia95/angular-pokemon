//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Routing
import { AppRoutingModule }  from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { NpmComponent } from './components/npm/npm.component';
import { PackageComponent } from './components/package/package.component';
import { CliComponent } from './components/cli/cli.component';
import { TypeScriptComponent } from './components/typescript/typescript.component';
import { AccessComponent } from './components/access/access.component';
import { ClassComponent } from './components/class/class.component';
import { TypesComponent } from './components/types/types.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { ModuleComponent } from './components/module/module.component';
import { TemplateComponent } from './components/template/template.component';
import { ComponentComponent } from './components/component/component.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { RoutingComponent } from './components/routing/routing.component';
import { DiComponent } from './components/di/di.component';
import { ServiceComponent } from './components/service/service.component';
import { AngularJSComponent } from './components/angularjs/angularjs.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { FlashcardComponent } from './components/structural/flashcard/flashcard.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { HttpComponent } from './components/http/http.component';

//Services
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    NpmComponent,
    PackageComponent,
    CliComponent,
    TypeScriptComponent,
    AccessComponent,
    ClassComponent,
    TypesComponent,
    DecoratorComponent,
    ModuleComponent,
    TemplateComponent,
    ComponentComponent,
    DirectiveComponent,
    RoutingComponent,
    DiComponent,
    ServiceComponent,
    AngularJSComponent,
    DatabindingComponent,
    StructuralComponent,
    FlashcardComponent,
    PipeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
