'use strict'

var voc = [{
  'id': 'tradle.Identity',
  'type': 'object',
  'title': 'Identity',
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
    },
    'owner': {
      type: 'object',
      ref: 'tradle.Identity',
      description: 'Owner of the contact list',
      readOnly: true
    },
    'contactInfo': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'contactMethod': {
            'type': 'string',
            'displayAs': ['type', ' : ', 'identifier'],
            'readOnly': true,
            'skipLabel': true
          },
          'identifier': {
            'type': 'string',
            'description': 'Phone number, IM name, skype id, etc.'
          },
          'type': {
            'type': 'string',
            'description': 'Like "phone", "IM", "skype", "email", etc.'
          }
        }
      },
      'viewCols': ['contactMethod'],
      'required': ['identifier', 'type']
    },
    'city': {
      'type': 'string'
    },
    'country': {
      'type': 'string'
    },
    'postalCode': {
      'type': 'number'
    },
    'region': {
      'type': 'string'
    },
    'street': {
      'type': 'string'
    },
    'formattedAddress': {
      transient: true,
      'type': 'string',
      'displayAs': ['street', ',', 'city', ',', 'region', 'postalCode'],
      'title': 'Address',
      'readOnly': true
    },
    'firstName': {
      'type': 'string'
    },
    'lastName': {
      'type': 'string'
    },
    'formatted': {
      transient: true,
      'type': 'string',
      'displayAs': ['firstName', 'lastName'],
      'readOnly': true,
      'displayName': true
    },
    'middleName': {
      'type': 'string'
    },
    'organization': {
      'type': 'object',
      'ref': 'tradle.Organization'
    },
    'verifiedByMe': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'readOnly': true,
        'ref': 'tradle.Verification'
      },
    },
    'myVerifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'readOnly': true,
        'ref': 'tradle.Verification'
      },
    },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'title': 'Tags via comma'
          },
          'url': {
            'type': 'string',
            readOnly: true
          }
        }
      },
      'required': ['url']
    },
    'pubkeys': {
      'type': 'array',
      'readOnly': true,
      'items':  {
        'type': 'object',
        'properties': {
          '_sig': {
            'type': 'string'
          },
          'curve': {
            'type': 'string'
          },
          'fingerprint': {
            'type': 'string'
          },
          'label': {
            'type': 'string'
          },
          'networkName': {
            'type': 'string'
          },
          'purpose': {
            'type': 'string'
          },
          'type': {
            'type': 'string'
          },
          'value': {
            'type': 'string'
          }
        },
        'required': ['_sig', 'fingerprint', 'value']
      }
    },
    'summary': {
      'type': 'string'
    },
    // 'v': {
    //   'type': 'string',
    //   'readOnly': true
    // },
    lastMessage: {
       type: 'string',
       style: {color: '#999999', fontSize: 14},
       transient: true
    },
    lastMessageTime: {
       type: 'date',
       transient: true
    },
    'websites': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'url': {
            'type': 'string'
          }
        }
      },
      'required': ['url']
    }
  },
  'required': [
    '_type',
    // 'contact',
    // 'photos',
    // 'pubkeys',
    'firstName',
    'lastName',
    'city',
    // 'v',
    // 'websites'
  ],
  'gridCols': [
    'formatted',
    'lastMessage',
    'lastMessageTime'
  ],
  'viewCols': [
    'formattedAddress',
    'organization',
    'myVerifications',
    'contactInfo',
    'websites',
    'pubkeys',
    'photos'
  ],
  'editCols': [
    'firstName', 
    'lastName',
    'street', 
    'city', 
    'region', 
    'postalCode',
    'country',
    'pubkeys',
    'organization'
  ]
},
{
   id: 'tradle.MyIdentities',
   type: 'object',
   title: 'My Identities',
   properties: {
     _type: {
       type: 'string',
       readOnly: true
     },
     currentIdentity: {
       type: 'object',
       ref: 'tradle.Identity',
       readOnly: true      
     },
     allIdentities: {
       type: 'array',
       items: {
         type: 'object',
         ref: 'tradle.Identity',
       } 
     }
   },
   required: ['id']
},
{
  'id': 'tradle.Organization',
  'type': 'object',
  'title': 'Organization',
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'name': {
       'type': 'string',
       'displayName': true,
       'skipLabel': true
     },
     'contacts': {
      'type': 'array',
      'items': {
        'type': 'object',
        'ref': 'tradle.Identity',
       } 
     },
     'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string'
          },
          'url': {
            'type': 'string',
            'skipLabel': true
          }
        }
      },
      'required': ['url']
     },
    'city': {
      'type': 'string'
    },
    'country': {
      'type': 'string'
    },
    'postalCode': {
      'type': 'number'
    },
    'region': {
      'type': 'string'
    },
    'street': {
      'type': 'string'
    },
    'formattedAddress': {
      'type': 'string',
      'displayAs': ['street', ',', 'city', ',', 'region', 'postalCode'],
      'title': 'Address'
    }     
  },  
  'required': ['name'],
  'viewCols': [
    'name',
    'street', 
    'city', 
    'region', 
    'country',
  ],
  'editCols': [
    'name', 
    'street', 
    'city', 
    'region', 
    'country',
  ]
},
{
  'id': 'tradle.Message',
  'type': 'object',
  'title': 'Message',
  'isInterface': true,
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'displayName': true,
     },
     'from': {
       'type': 'object',
       'readOnly': true,
       'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
     },
     'time': {
       'type': 'date',
       'readOnly': true,
       'displayName': true
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    relatedTo: {
      type: 'object',
      ref: 'tradle.Message',      
    }
  },  
  'required': [
    'to', 'from', 'message'
  ],
  'viewCols': [
    'message'
  ],
},
{
  id: 'tradle.NewMessageModel',
  type: 'object',
  title: 'New message model',
  properties: {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'url': {
      'type': 'string',
      'displayName': true
     }
  },
  required: ['url'] 
},
{
  'id': 'tradle.SimpleMessage',
  'type': 'object',
  'title': 'Simple Message',
  'autoCreate': true,
  'interfaces': ['tradle.Message'],
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'displayName': true,
     },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
     'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     }
  },  
  'required': [
    'to', 'message', 'from'
  ],
  'viewCols': [
    'message', 'time'
  ],
},

{
  'id': 'tradle.VerificationRequest',
  'type': 'object',
  'title': 'Verification Request',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#F4F5E6'},
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'title': 'Description',
      'displayName': true,
     },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true
     },
     'transactionHash': {
       'readOnly': true,
       'type': 'string'
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    'verifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'readOnly': true,
        'ref': 'tradle.Verification'        
      },
      'required': ['contact']
    }
  },  
  'required': [
    'to', 'message', 'from'
  ],
  'gridCols': [
    'message', 'time'
  ],
  'viewCols': [
    'message', 'time', 'photos', 'verifications'
  ],
},
{
  'id': 'tradle.SkillVerification',
  'type': 'object',
  'title': 'Skill Verification',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#FAF9E1'},
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'title': 'Description',
      'displayName': true,
     },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true
     },
     'transactionHash': {
       'readOnly': true,
       'type': 'string'
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    'verifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'ref': 'tradle.Verification'
      },
      'required': ['contact']
    }
  },  
  'required': [
    'to', 'message', 'from'
  ],
  'gridCols': [
    'message', 'time'
  ],
  'viewCols': [
    'message', 'time', 'photos', 'verifications'
  ],
},
{
  'id': 'tradle.SalaryVerification',
  'type': 'object',
  'title': 'Salary Verification',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#E1FAF9'},
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'title': 'Description',
      'displayName': true,
     },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true,
     },
     'transactionHash': {
       'readOnly': true,
       'type': 'string'
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    'verifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'ref': 'tradle.Verification'
      },
      'required': ['contact']
    }
  },  
  'required': [
    'to', 'message', 'from'
  ],
  'gridCols': [
    'message', 'time'
  ],
  'viewCols': [
    'message', 'time', 'photos', 'verifications'
  ],
},
{
  'id': 'tradle.DocumentVerification',
  'type': 'object',
  'title': 'Doc Verification',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#EBE1FA'},
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'displayName': true,
      'title': 'Description',
     },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true,
     },
     'transactionHash': {
       'readOnly': true,
       'type': 'string'
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    'verifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'ref': 'tradle.Verification'
      },
      'required': ['contact']
    }
  },  
  'required': [
    'to', 'message', 'from', 'photos'
  ],
  'gridCols': [
    'message', 'time'
  ],
  'viewCols': [
    'message', 'time', 'photos', 'blockchainUrl', 'verifications'
  ],
},
{
  'id': 'tradle.AddressVerification',
  'type': 'object',
  'title': 'Verify Address',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#FAEDE1'},
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'message': {
      'type': 'string',
      'displayName': true,
      'title': 'Description',
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true
     },
     'transactionHash': {
       'readOnly': true,
       'type': 'string'
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     },
    'street': {
      'type': 'string'
    },
    'city': {
      'type': 'string'
    },
    'region': {
      'type': 'string'
    },
    'postalCode': {
      'type': 'number'
    },
    'country': {
      'type': 'string'
    },
    'formattedAddress': {
      'type': 'string',
      'displayAs': ['street', ',', 'city', ',', 'region', 'postalCode'],
      'title': 'Address',
      'skipLabel': true,
      'readOnly': true
    },
     'from': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Identity',
     },
     'to': {
       'type': 'object',
       'ref': 'tradle.Identity',
       'displayName': true,
       'readOnly': true
     },
    'photos': {
      'type': 'array',
      'items': {
        'type': 'object',
        'properties': {
          'tags': {
            'type': 'string',
            'skipLabel': true
          },
          'url': {
            'type': 'string',
            'readOnly': true
          }
        }
      },
      'required': ['title', 'url']
    },
    'verifications': {
      'type': 'array',
      'readOnly': true,
      'items': {
        'type': 'object',
        'ref': 'tradle.VerificationOfAddress'
      },
      'required': ['contact']
    }
  },  
  'required': [
    'to', 'from', 'message', 'street', 'city', 'region', 'postalCode'
  ],
  'gridCols': [
    'message', 'formattedAddress', 'time'
  ],
  'viewCols': [
    'message', 'formattedAddress', 'blockchainUrl', 'time', 'verifications'
  ],
},
{
  'id': 'tradle.Verification',
  'type': 'object',
  'title': 'Verification',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#E7E6F5'},
  'autoCreate': true,
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'document': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Message',
      'title': 'Verifying document',
     },
     'message': {
      'type': 'object',
      'title': 'Description',
      'displayName': true,
     },
     'to': {
      'type': 'object',
      'title': 'Owner',
      'ref': 'tradle.Identity',
      'displayName': true,
      'readOnly': true,
     },
     'from': {
       'type': 'object',
       'title': 'Verifier',
       'readOnly': true,
       'ref': 'tradle.Identity',
       'displayName': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true
     },
     'transactionHash': {
       'type': 'string',
       'readOnly': true
     },
     'time': {
       type: 'date',
       readOnly: true
     }
  },  
  'required': [
    'message', 'to', 'from', 'time'
  ],
  'viewCols': [
    'message', 'time'
  ],
},
{
  'id': 'tradle.VerificationOfAddress',
  'type': 'object',
  'title': 'Verification',
  'interfaces': ['tradle.Message'],
  'style': {'backgroundColor': '#E7E6F5'},
  'autoCreate': true,
  'properties': {
    '_type': {
      'type': 'string',
      'readOnly': true
     },
     'document': {
      'type': 'object',
      'readOnly': true,
      'ref': 'tradle.Message',
      'title': 'Verifying document',
     },
     'message': {
      'type': 'object',
      'title': 'Description',
      'displayName': true,
     },
     'ver1': {
        type: 'string'
     },
     'ver2': {
        type: 'string'
     },
     'ver3': {
        type: 'string'
     },
     'ver4': {
        type: 'boolean'
     },
     'to': {
      'type': 'object',
      'title': 'Owner',
      'ref': 'tradle.Identity',
      'displayName': true,
      'readOnly': true,
     },
     'from': {
       'title': 'Verifier',
       'type': 'object',
       'readOnly': true,
       'ref': 'tradle.Identity',
       'displayName': true
     },
     'blockchainUrl': {
       'type': 'string',      
       'readOnly': true
     },
     'transactionHash': {
       'type': 'string',
       'readOnly': true
     },
     'time': {
       'type': 'date',
       'readOnly': true,
     }
  },  
  'required': [
    'message', 'ver1', 'ver2', 'ver3', 'to', 'from', 'time'
  ],
  'viewCols': [
    'message', 'time', 'from'
  ],
},
{
  id: 'tradle.Coupon',
  title: 'Coupon',
  type: 'object',
  properties: {
    '_type': {
      type: 'string',
      readOnly: true
    },
    dealRef: {
      type: 'number',
      readOnly: true
    },              //* deal reference
    title: {
      type: 'string',
      description: 'title is displayed on the coupon'
    },
    shortTitle: {
      type: 'string',
    },
    conditions: {
      maxLength: 2000,
      type: 'string',
      description: 'What is this coupon for? Limits for personal use and gifts. Phone # for questions and booking. Operating hours. Any special conditions for coupon use. Other discounts/bonuses provided by the vendor. Omit dates already specified on coupon.'
    },
    description: {
      type: 'string',
      maxLength: 2000,
      description: 'clearly describe the product/service. Emphasize high value low price contrast. State quality/quantity of the product/service (and why the customer needs it). When in doubt, use "You pay x instead of XX"'
    },
    summary: {
      type: 'string',
      description: 'Short description of the deal. IMPORTANT for aggregators - must include discount and amount saved.'
    },
    submittedBy: {
      type: 'object',
      ref: 'tradle.Identity',
      readOnly: true
    },
    photos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          tags: {
            type: 'string',
            title: 'Tags via comma'
          },
          url: {
            type: 'string',
            readOnly: true
          }
        }
      },
      required: ['url']
    },
    featured: {
      type: 'date'
    },
    expired: {
      type: 'date'
    },
    redeemBy: {
      description: 'must redeem by this date'
    },
    dealAmount: {
      type: 'object',
      ref: 'tradle.Money',
      description: 'only for "Buy Limited Discount" coupons; how much more customer needs to spend including certificate to get a deal'
    },
    dealValue: {
      type: 'object',
      ref: 'tradle.Money',
      description: 'price before discount for "Standard" coupons or price of the certificate for "Buy Limited Discount" coupons'
    },
    dealPrice: {
      type: 'object',
      ref: 'tradle.Money',
    },    
    dealDiscount: {
      type: 'object',
      ref: 'tradle.Money',
      readOnly: true
    },
    allPurchases: {
      type: 'array',
      items: {
        type: 'object',
        ref: 'tradle.CouponBuy'
      }
    },
    couponBuysCount: {
      type: 'number',
      readOnly: true
    },
    couponBuysAdjustedTotal: {
      type: 'object',
      ref: 'tradle.Money',
      readOnly: true
    },
    discount: {
      type: 'number',
      suffix: '%',
      minimum: 1,
      maximum: 99
    },
    dealStatus: {
      type: 'string',
      readOnly: true,
      oneOf: [
        'Deal is over', 
        'Deal is going', 
        'Not featured yet'
      ]
    },
    availableLocations: {
      type: 'array',
      ref: 'tradle.RedemptionLocation'
    },
    vendor: {
      type: 'object',
      ref: 'tradle.Vendor'
    },
    canceled: {
      type: 'boolean'
    },
    canceledBy: {
      type: 'object',
      ref: 'tradle.Identity',
      readOnly: true
    },
    dateCanceled: {
      type: 'date',
      readOnly: true
    },
    dateSubmitted: {
      type: 'date',
      readOnly: true
    },
    required: ['title', 'dealPrice', 'vendor', 'expired'],
    viewCols: ['shortTitle', 'dateSubmitted', 'dealPrice', 'discount', 'couponBuysCount', 'vendor', 'dealStatus']
  }
},
{
  id: 'tradle.CouponBuy',
  type: 'object',
  title: 'Coupon Buy',
  properties: {
    '_type': {
      type: 'string',
      readOnly: true
    },
    purchaseNumber: {
      type: 'number',
      readOnly: 'true'
    },
    transactionId: {
      type: 'string',
      readOnly: true
    },
    customer: {
      type: 'object',
      ref: 'tradle.Identity',
      readOnly: true
    },
    coupon: {
      type: 'object',
      ref: 'tradle.Coupon',
      readOnly: true
    },
    vendor: {
      type: 'object',
      readOnly: true,
      ref: 'tradle.Vendor'
    },
    title: {
      type: 'string',
      description: 'title is displayed on the coupon'
    },
    shortTitle: {
      type: 'string',
    },
    purchaseTime: {
      type: 'date',
      readOnly: true
    },
    email: {
      type: 'string'
    },
    dealAmount: {
      type: 'object',
      ref: 'tradle.Money',
      description: 'only for "Buy Limited Discount" coupons; how much more customer needs to spend including certificate to get a deal'
    },
    dealValue: {
      type: 'object',
      ref: 'tradle.Money',
      description: 'price before discount for "Standard" coupons or price of the certificate for "Buy Limited Discount" coupons'
    },
    dealPrice: {
      type: 'object',
      ref: 'tradle.Money',
    },    
    dealDiscount: {
      type: 'object',
      ref: 'tradle.Money',
      readOnly: true
    },
    redeemed: {
      type: 'boolean'
    },
    location: {
      type: 'object',
      ref: 'tradle.RedemptionLocation'
    },
    photos: {
      type: 'array',
      readOnly: true,
      items: {
        type: 'object',
        properties: {
          tags: {
            type: 'string',
            title: 'Tags via comma'
          },
          url: {
            type: 'string',
            readOnly: true
          }
        }
      },
      required: ['url']
    },
  },
  required: ['purchaseNumber', 'customer', 'coupon'],
},
{
  id: 'tradle.RedemptionLocation',
  type: 'object',
  properties: {
    coupon: {
      type: 'object',
      ref: 'tradle.Coupon',
      readOnly: true
    },
    vendor: {
      type: 'object',
      readOnly: true,
      ref: 'tradle.Vendor'
    },
    photos: {
      type: 'array',      
      formula: 'vendor.photos'
    }
  },
  required: ['coupon', 'vendor']
},
{
  id: 'tradle.Vendor',
  type: 'object',
  title: 'Vendor',
  properties: {

  }
},
{
  id: 'tradle.Money',
  type: 'object',
  properties: { 
    '_type': {
      'type': 'string',
      'readOnly': true
    },
    value: {
      type: 'number'
    },
    currency: {
      type: 'string',
      oneOf: [
        {USD: '$'},
        {GBR: '£'},
        {CNY: '¥'}
      ]
    }
  }
},

];

var models = {
  getModels: function() {
    return voc;
  }
}
module.exports = models;
