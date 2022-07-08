import { Component, Inject, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  opened = true;
  dataSource: any =[];

  constructor(private msalService: MsalService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService){
  }

  ngOnInit(): void { 
  }

  isLoggedIn(): boolean{
    return this.msalService.instance.getAllAccounts().length > 0;//  null
  }

  // login(){
  //   this.msalService.loginPopup().subscribe( (response: AuthenticationResult) => {
  //     this.msalService.instance.setActiveAccount(response.account);
  //   });
  // }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.msalService.loginPopup({...this.msalGuardConfig.authRequest, ...userFlowRequest} as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(response.account);
          });
      } else {
        this.msalService.loginPopup(userFlowRequest)
          .subscribe((response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest){
        this.msalService.loginRedirect({...this.msalGuardConfig.authRequest, ...userFlowRequest} as RedirectRequest);
      } else {
        this.msalService.loginRedirect(userFlowRequest);
      }
      this.msalService.loginPopup().subscribe( (response: AuthenticationResult) => {
        this.msalService.instance.setActiveAccount(response.account);
      });
    }

 }

  logout(){
    this.msalService.logout();
  }

  getClaims() {

    console.log( this.msalService.instance.getActiveAccount());

    // var claims = this.msalService.instance.getActiveAccount()?.idTokenClaims;
    // this.dataSource = [
    //   {id: 1, claim: "Display Name", value: claims ? claims['name'] : null},
    //   {id: 2, claim: "Object ID", value: claims ? claims['oid']: null},
    //   {id: 3, claim: "Job Title", value: claims ? claims['jobTitle']: null},
    //   {id: 4, claim: "City", value: claims ? claims['city']: null},
    // ];
    // console.log("----------------------------");
    // console.log(this.dataSource);
  }


}
