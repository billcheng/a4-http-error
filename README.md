# a4-http-error-interceptor
Angular 4+ Http Error Interceptor

# How-To
## Install
```
npm install a4-http-error-interceptor
```

## app.module.ts
1. Add ```HttpErrorModule``` to imports of the ```app.module.ts```.

```typescript

...
import { HttpErrorModule } from 'a4-http-error-interceptor';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    HttpErrorModule,
    ...
  ],
  ...
})
```

## Inject the service
```typescript
constructor(private httpErrorService: HttpErrorService) { }
```

## Push error handler during ngOnInit
```typescript
this.httpErrorService.push(404, () => {
  // handle 404
  });
);
```

## Pop error handler during ngOnDestroy
```typescript
this.httpErrorService.pop(404);
```
