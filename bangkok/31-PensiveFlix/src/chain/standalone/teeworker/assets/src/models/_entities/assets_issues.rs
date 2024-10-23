//! `SeaORM` Entity, @generated by sea-orm-codegen 1.1.0

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};
pub use super::super::assets_issues::IssueState;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq, Serialize, Deserialize)]
#[sea_orm(table_name = "assets_issues")]
pub struct Model {
    pub created_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
    #[sea_orm(primary_key)]
    pub id: i32,
    pub account_id: String,
    // u64 unsupported by sqlx-sqlite
    pub size: i64,
    pub filename: String,
    pub media_type: String,
    pub state: IssueState,
    pub assets_id: Option<String>,
    pub name: Option<String>,
    pub mint_count: i32,
    pub retrive_uri: Option<String>,
    pub cover_image: Option<String>,
    pub pflix_issuer: Option<String>,
    pub pflix_signature: Option<String>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}