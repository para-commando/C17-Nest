import { SWAGGER_UI_CONSTANTS } from './constants/swagger-ui.constants';

export class SwaggerUI {
  constructor(private readonly applicationUrl: string) {}

  private customSiteTitle = 'C17-nest Swagger UI';
  private faviconFilename = 'nestjs-logo.png';
  private topbarIconFilename = 'app-logo.png';

  private customfavIcon: string = `${this.applicationUrl}/api/wwwroot/swagger/assets/${this.faviconFilename}?v=${new Date().getTime()}`;
  private customCss: string = `
  .topbar-wrapper { content:url('${this.applicationUrl}/api/wwwroot/swagger/assets/${this.topbarIconFilename}'); width:auto; height:120px; }
  .topbar-wrapper svg { visibility: hidden; }
  .swagger-ui .opblock.opblock-get { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.BORDER_COLOR}; }
  .swagger-ui .opblock.opblock-get .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.GET.SUMMARY_COLOR}; }
  .swagger-ui .opblock.opblock-post { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.BORDER_COLOR}; }
  .swagger-ui .opblock.opblock-post .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.POST.SUMMARY_COLOR}; }
  .swagger-ui .opblock.opblock-delete { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.BORDER_COLOR}; }
  .swagger-ui .opblock.opblock-delete .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.DELETE.SUMMARY_COLOR}; }
  .swagger-ui .opblock.opblock-patch { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.BORDER_COLOR}; }
  .swagger-ui .opblock.opblock-patch .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PATCH.SUMMARY_COLOR}; }
  .swagger-ui .opblock.opblock-put { background-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.BACKGROUND_COLOR}; border-color: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.BORDER_COLOR}; }
  .swagger-ui .opblock.opblock-put .opblock-summary-method { background: ${SWAGGER_UI_CONSTANTS.HTTP_METHODS.PUT.SUMMARY_COLOR}; }
  .swagger-ui .btn.authorize svg { fill: ${SWAGGER_UI_CONSTANTS.AUTHORIZE.BACKGROUND_COLOR}; }
  .swagger-ui .topbar:before {
    content: '${'C17-nest: Boiler plate for NestJs'}'; /* Add your custom text here */
    color: white; /* Set text color */
    font-size: 45px; /* Adjust font size */
    font-weight: bold; /* Adjust font weight */
    position: absolute;
    left: 30%;
    top: 30px;
   }
    .swagger-ui {
    background-color: #3c4c24;

  }
   .swagger-ui .scheme-container {
    background-color: #3c4c24;
    border: none;
  }
.swagger-ui .btn.authorize {
color: #FFFFFF;
background-color: #000000;
border-color:white;
}
.swagger-ui .info .title {
  color: #FFFFFF;
}
 .swagger-ui .info li, .swagger-ui .info p, .swagger-ui .info table {
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 14px;
}
    .swagger-ui .opblock-tag {
    color: #000000;
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 0 5px;
    background-color: white
}
    .swagger-ui .opblock-tag small {
    color: #FFFFFF;
    flex: 2;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
}




.swagger-ui .btn.execute {
    background-color: green;
    border-color: #4990e2;
    color: #fff;
    border-radius: 32px;
}
    .swagger-ui .btn-group .btn:first-child {
    border-radius: 32px;

}
        .swagger-ui .btn-group  .btn:last-child{
    border-radius: 32px;

}

.swagger-ui section.models.is-open {
    padding: 20px;
}
    .swagger-ui section.models {
    padding: 20px;
    background-color: white;
    color:black;
}
    body {
    height: 100vh;}

    .swagger-ui .info .title small.version-stamp {

    display: none;
}
     `;

  private swaggerOptions = {
    persistAuthorization: true,
  };

  public customOptions = {
    customfavIcon: this.customfavIcon,
    customSiteTitle: this.customSiteTitle,
    customCss: this.customCss,
    swaggerOptions: this.swaggerOptions,
  };
}
