//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Substrate.NetApi.Attributes;
using Substrate.NetApi.Model.Types.Base;
using Substrate.NetApi.Model.Types.Metadata.V14;
using System.Collections.Generic;


namespace PolkadotAssetHub.NetApi.Generated.Model.pallet_nfts.types
{
    
    
    /// <summary>
    /// >> 424 - Composite[pallet_nfts.types.CollectionDetails]
    /// </summary>
    [SubstrateNodeType(TypeDefEnum.Composite)]
    public sealed class CollectionDetails : BaseType
    {
        
        /// <summary>
        /// >> owner
        /// </summary>
        public PolkadotAssetHub.NetApi.Generated.Model.sp_core.crypto.AccountId32 Owner { get; set; }
        /// <summary>
        /// >> owner_deposit
        /// </summary>
        public Substrate.NetApi.Model.Types.Primitive.U128 OwnerDeposit { get; set; }
        /// <summary>
        /// >> items
        /// </summary>
        public Substrate.NetApi.Model.Types.Primitive.U32 Items { get; set; }
        /// <summary>
        /// >> item_metadatas
        /// </summary>
        public Substrate.NetApi.Model.Types.Primitive.U32 ItemMetadatas { get; set; }
        /// <summary>
        /// >> item_configs
        /// </summary>
        public Substrate.NetApi.Model.Types.Primitive.U32 ItemConfigs { get; set; }
        /// <summary>
        /// >> attributes
        /// </summary>
        public Substrate.NetApi.Model.Types.Primitive.U32 Attributes { get; set; }
        
        /// <inheritdoc/>
        public override string TypeName()
        {
            return "CollectionDetails";
        }
        
        /// <inheritdoc/>
        public override byte[] Encode()
        {
            var result = new List<byte>();
            result.AddRange(Owner.Encode());
            result.AddRange(OwnerDeposit.Encode());
            result.AddRange(Items.Encode());
            result.AddRange(ItemMetadatas.Encode());
            result.AddRange(ItemConfigs.Encode());
            result.AddRange(Attributes.Encode());
            return result.ToArray();
        }
        
        /// <inheritdoc/>
        public override void Decode(byte[] byteArray, ref int p)
        {
            var start = p;
            Owner = new PolkadotAssetHub.NetApi.Generated.Model.sp_core.crypto.AccountId32();
            Owner.Decode(byteArray, ref p);
            OwnerDeposit = new Substrate.NetApi.Model.Types.Primitive.U128();
            OwnerDeposit.Decode(byteArray, ref p);
            Items = new Substrate.NetApi.Model.Types.Primitive.U32();
            Items.Decode(byteArray, ref p);
            ItemMetadatas = new Substrate.NetApi.Model.Types.Primitive.U32();
            ItemMetadatas.Decode(byteArray, ref p);
            ItemConfigs = new Substrate.NetApi.Model.Types.Primitive.U32();
            ItemConfigs.Decode(byteArray, ref p);
            Attributes = new Substrate.NetApi.Model.Types.Primitive.U32();
            Attributes.Decode(byteArray, ref p);
            var bytesLength = p - start;
            TypeSize = bytesLength;
            Bytes = new byte[bytesLength];
            global::System.Array.Copy(byteArray, start, Bytes, 0, bytesLength);
        }
    }
}